import React from "react"; 
import { FlatList } from "react-native-gesture-handler";

import { categories } from "../../utils/categories";

import { Button } from "../../components/Form/Button";

import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer,
} from "./styles";


interface CategoryProp{
    key: string;
    name: string;
}

interface Props{
    category: CategoryProp;
    setCategory: (category: CategoryProp) => void
    closeSelectCategory: () => void
}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}: Props) {

    function handleCategorySelect(category: CategoryProp) {
        setCategory(category)
    }

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
            <FlatList
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category
                        isActive={item.key === category.key}
                        onPress={() => handleCategorySelect(item)}
                    >
                        <Icon name={ item.icon } />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />

            <Footer>
                <Button
                    title="Selecionar"
                    onPress={closeSelectCategory}
                />
            </Footer>

        </Container>
    )
}
