import { Dispatch, FunctionComponent, SetStateAction, memo } from "react";
import styles from "./CategoriesTabs.module.scss";
import { CategoriesType } from "../../types/categoryType";

interface CategoriesTabsProps {
  setSelectedCategoryID: Dispatch<SetStateAction<string>>;
  selectedCategoryID: string;
  categories: CategoriesType["newsCategory"];
}

const CategoriesTabs: FunctionComponent<CategoriesTabsProps> = ({
  selectedCategoryID,
  setSelectedCategoryID,
  categories,
}) => {
  return (
    <div className={styles.categoriesHolder}>
      {categories?.map(({ id, name }) => (
        <div
          className={styles.category}
          key={id}
          is-selected={`${+selectedCategoryID === +id}`}
          onClick={() => setSelectedCategoryID(id)}
        >
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  );
};

export default memo(CategoriesTabs);
