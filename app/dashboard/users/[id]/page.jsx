import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        René
      </div>
      <div className={styles.formContainer}>
        <label>Username</label>
        <input type="text" name="username" placeholder="René" />
        <label>Email</label>
        <input type="email" name="username" placeholder="René" />
        <label>Password</label>
        <input type="text" name="username" placeholder="René" />
        <label>Username</label>
        <input type="text" name="username" placeholder="René" />
      </div>
    </div>
  );
};

export default SingleUserPage;
