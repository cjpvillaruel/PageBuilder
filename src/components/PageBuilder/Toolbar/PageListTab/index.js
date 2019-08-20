import React from 'react';
import { pages } from './data';

const Page = ({ name, nodes, level }) => {
  if (nodes !== []) {
    return <div>{name}</div>;
  }
};
const PageList = ({ level = 0, nodes }) => {
  return (
    <div>
      {nodes.map((node, i) => {
        return (
          <div key={`level-${level}-${i}`} style={{ paddingLeft: level * 40 }}>
            <Page {...node} level={level} />
            {node.nodes && node.nodes.length > 0 && (
              <PageList nodes={node.nodes} level={level + 1} />
            )}
          </div>
        );
      })}
    </div>
  );
};
const PageListTab = () => {
  return (
    <div style={{ padding: 20, display: 'block', textAlign: 'left' }}>
      <PageList nodes={pages} />
    </div>
  );
};

export default PageListTab;
