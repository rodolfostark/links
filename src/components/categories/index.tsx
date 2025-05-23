import { categories } from "@/utils/categories"
import { FlatList } from "react-native"

import { styles } from "./styles"
import { Category } from "@/components/category"

type CategoriesProps = {
    selected: string
    onChange: (category: string) => void
}

export function Categories({ selected, onChange }: CategoriesProps) {
    return (
        <FlatList 
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category 
                    name={item.name} 
                    icon={item.icon} 
                    isSelected={item.name === selected}
                    onPress={() => onChange(item.name)} 
                />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    )
}