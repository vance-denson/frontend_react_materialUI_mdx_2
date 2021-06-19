import {
  Typography,
  Container,
  Divider,
  List,
  ListItem,
  Button,
} from "@material-ui/core";

const MDXComponents = {
  h1: (props) => (
    <Typography
      variant="h1"
      align="center"
      color="primary"
      {...props}
      gutterBottom
    />
  ),
  h2: (props) => (
    <Typography
      variant="h2"
      align="center"
      color="primary"
      {...props}
      gutterBottom
    />
  ),
  h3: (props) => (
    <Typography
      variant="h3"
      align="center"
      color="primary"
      {...props}
      gutterBottom
    />
  ),
  h4: (props) => (
    <Typography variant="h4" align="center" color="primary" {...props} />
  ),
  h5: (props) => (
    <Typography variant="h5" align="center" color="primary" {...props} />
  ),
  h6: (props) => (
    <Typography variant="h6" align="center" color="primary" {...props} />
  ),
  inlineCode: (props) => <Code {...props} />,
  br: (props) => <Container {...props} />,
  hr: (props) => <Divider />,
  p: (props) => <Typography {...props} />,
  ul: (props) => <List {...props} />,
  ol: (props) => <List {...props} />,
  li: (props) => <ListItem classes="" {...props} />,
  resumeli: (props) => <ListItem {...props} />,
  a: (props) => <Button variant="contained" color="primary" {...props} />,
};

export default MDXComponents;
