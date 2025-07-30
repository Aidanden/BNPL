export interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export interface HeaderProps {
    title: string;
}

export interface HomeScreenProps {
    navigation: any; // Replace 'any' with a more specific type if using a navigation library
}

export interface AppNavigatorProps {
    initialRouteName?: string;
}