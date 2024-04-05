import ButtonCategory from '../../components/atoms/buttons/ButtonCategory';

type CategoryProps = {
  go: string;
  src: string;
  categoryName: string;
};

const MainCategories: React.FC<CategoryProps> = ({ go, src, categoryName }) => {
  return (
    <li>
      <img src={src} />
      <ButtonCategory go={go} categoryName={categoryName} />
    </li>
  );
};

export default MainCategories;
