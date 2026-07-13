import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import type {Props} from '@theme/DocPaginator';
import { useTransition } from '@site/src/theme/Root';

export default function DocPaginator(props: Props): JSX.Element {
  const {previous, next} = props;
  const { playTransition } = useTransition();

  return (
    <nav
      className="pagination-nav docusaurus-mt-lg"
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages',
        description: 'The ARIA label for the docs pagination',
      })}>
      {previous && (
        <div onClickCapture={(e) => {
          e.preventDefault();
          e.stopPropagation();
          playTransition('slide-right', previous.permalink, e as any);
        }}>
          <PaginatorNavLink
            {...previous}
            subLabel={
              <Translate
                id="theme.docs.paginator.previous"
                description="The label used to navigate to the previous doc">
                Previous
              </Translate>
            }
          />
        </div>
      )}
      {next && (
        <div onClickCapture={(e) => {
          e.preventDefault();
          e.stopPropagation();
          playTransition('slide-left', next.permalink, e as any);
        }}>
          <PaginatorNavLink
            {...next}
            subLabel={
              <Translate
                id="theme.docs.paginator.next"
                description="The label used to navigate to the next doc">
                Next
              </Translate>
            }
            isNext
          />
        </div>
      )}
    </nav>
  );
}
