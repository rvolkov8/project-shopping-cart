import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

const Github = () => {
  return (
    <div className="github">
      <a
        href="https://github.com/rvolkov8"
        target="_blank"
        rel="noopener noreferrer"
      >
        rvolkov8
        <Icon
          className="github-icon"
          path={mdiGithub}
          size={0.9}
          color="#f5f5f5"
        />
      </a>
    </div>
  );
};

export default Github;
