export const useCategoriesListItem = (category) => {
  const handleClickEditCategory = async () => {
    window.alert(`Изменить категорию ${category.title}`)
  }

  return {
    editCategory: handleClickEditCategory
  }
}
