import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      {/* Display content based on the category */}
      You selected: {category}
    </div>
  );
}
