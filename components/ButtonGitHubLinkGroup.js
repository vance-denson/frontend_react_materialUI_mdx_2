import { Button } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function ButtonGitHubLinkGroup() {
  return (
    <>
      <Link href="https://github.com/vance21017" scroll={false}>
        <Button variant="contained" color="Primary">
          My GitHub
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/vance-denson-5a6324b6/"
        scroll={false}
      >
        <Button variant="contained" color="Primary">
          LinkedIn
        </Button>
      </Link>
    </>
  );
}
