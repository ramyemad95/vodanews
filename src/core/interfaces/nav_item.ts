export interface NavItem {
    name: string;
    title: string;
    icon: string;
    iconFocused: string;
    component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
  }