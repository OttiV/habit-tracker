import { FC, ReactNode } from 'react';
import { Container } from 'semantic-ui-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <Container style={{ paddingTop: 10 }}>{children}</Container>
);

export default Layout;
