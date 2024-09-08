import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
// import Comments from "@/components/comments/Comments";

// Hàm getData với dữ liệu giả thay vì gọi API
const getData = async (slug) => {
  // Dữ liệu giả cho bài viết
  const mockData = {
    title: "Sample Blog Post",
    user: {
      name: "John Doe",
      image: "/images/sample-user.jpg", // Đường dẫn đến ảnh mẫu
    },
    img: "/images/sample-post.jpg", // Đường dẫn đến ảnh bài viết
    desc: "<p>This is a <strong>sample</strong> blog post description for testing purposes.</p>",
  };

  // Trả về dữ liệu giả, không gọi API
  return mockData;
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug); // Sử dụng dữ liệu giả

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="User Image"
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Post Image"
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
