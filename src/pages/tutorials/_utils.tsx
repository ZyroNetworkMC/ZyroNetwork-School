import {useCallback, useMemo, useState, useEffect} from 'react';
import {translate} from '@docusaurus/Translate';
import {
  usePluralForm,
  useQueryString,
  useQueryStringList,
} from '@docusaurus/theme-common';
import type {TagType, User} from '@site/src/data/tutorials';
import {sortedUsers} from '@site/src/data/tutorials';

export function useSearchName() {
  return useQueryString('name');
}

export function useTags() {
  const [tags, setTags] = useQueryStringList('tags');
  return [tags ?? [], setTags] as const;
}

type Operator = 'OR' | 'AND';

export function useOperator() {
  const [searchOperator, setSearchOperator] = useQueryString('operator');
  const operator: Operator = searchOperator === 'AND' ? 'AND' : 'OR';
  const toggleOperator = useCallback(() => {
    const newOperator = operator === 'OR' ? 'AND' : null;
    setSearchOperator(newOperator);
  }, [operator, setSearchOperator]);
  return [operator, toggleOperator] as const;
}

function filterUsers({
  users,
  tags,
  operator,
  searchName,
}: {
  users: User[];
  tags: TagType[];
  operator: Operator;
  searchName: string | null;
}) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    users = users.filter((user) =>
      user.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (tags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    if (user.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return tags.every((tag) => user.tags.includes(tag));
    }
    return tags.some((tag) => user.tags.includes(tag));
  });
}

const FAVORITES_STORAGE_KEY = 'zyro_school_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const loadFavorites = useCallback(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    loadFavorites();
    const handleStorageChange = () => loadFavorites();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('favorites_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('favorites_updated', handleStorageChange);
    };
  }, [loadFavorites]);

  const toggleFavorite = useCallback((tutorialTitle: string) => {
    setFavorites((prevFavorites) => {
      let newFavorites;
      if (prevFavorites.includes(tutorialTitle)) {
        newFavorites = prevFavorites.filter((t) => t !== tutorialTitle);
      } else {
        newFavorites = [...prevFavorites, tutorialTitle];
      }
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
        window.dispatchEvent(new Event('favorites_updated'));
      } catch (e) {
        console.error(e);
      }
      return newFavorites;
    });
  }, []);

  return {favorites, toggleFavorite};
}

export function useFilteredUsers() {
  const [tags] = useTags();
  const [searchName] = useSearchName();
  const [operator] = useOperator();
  const {favorites} = useFavorites();

  return useMemo(() => {
    // Inject local favorites into the tutorial tags before filtering
    const usersWithDynamicFavorites = sortedUsers.map((user) => {
      const hasFavTag = user.tags.includes('favorite');
      const isLocalFav = favorites.includes(user.title);
      
      if (isLocalFav && !hasFavTag) {
        return {...user, tags: [...user.tags, 'favorite' as TagType]};
      }
      if (!isLocalFav && hasFavTag) {
        // If it was hardcoded but they un-favorited it, remove it (optional, but good UX)
        return {...user, tags: user.tags.filter(t => t !== 'favorite')};
      }
      return user;
    });

    return filterUsers({
      users: usersWithDynamicFavorites,
      tags: tags as TagType[],
      operator,
      searchName,
    });
  }, [tags, operator, searchName, favorites]);
}

export function useSiteCountPlural() {
  const {selectMessage} = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          description:
            'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 site|{sitesCount} sites',
        },
        {sitesCount},
      ),
    );
}