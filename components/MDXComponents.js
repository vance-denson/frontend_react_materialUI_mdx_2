/**
 * styles for MDX posts
 */

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
      color="inherit"
      {...props}
      gutterBottom
    />
  ),
  h2: (props) => (
    <Typography
      variant="h2"
      align="center"
      color="inherit"
      {...props}
      gutterBottom
    />
  ),
  h3: (props) => (
    <Typography
      variant="h3"
      align="center"
      color="inherit"
      {...props}
      gutterBottom
    />
  ),
  h4: (props) => (
    <Typography variant="h4" align="center" color="inherit" {...props} />
  ),
  h5: (props) => (
    <Typography variant="h5" align="center" color="inherit" {...props} />
  ),
  h6: (props) => (
    <Typography variant="h6" align="center" color="inherit" {...props} />
  ),
  inlineCode: (props) => <Typography displayBlock {...props} />,
  br: (props) => <Container {...props} />,
  hr: (props) => <Divider />,
  p: (props) => <Typography {...props} />,
  ul: (props) => <List {...props} />,
  ol: (props) => <ListItem {...props} />,
  li: (props) => <ListItem classes="" {...props} />,
  a: (props) => <Button variant="contained" color="primary" {...props} />,
  table: (props) => <Table {...props} />,
};

export default MDXComponents;
