import styles from "./hello.module.css";

type Props = {
  state: number;
  isFinishedEndAnimation: number;
};

const Hello = ({ state, isFinishedEndAnimation }: Props) => {
  //state = 0 <- キューがない
  //state = 1 <- キューがある
  //state = 2 <- キューがなくて、初期状態
  return (
    <>
      {state === 0 && isFinishedEndAnimation === 0 ? (
        <div className={styles.startAnimation}>start</div>
      ) : state === 1 && isFinishedEndAnimation == 0 ? (
        <div className={styles.endAnimation}>end</div>
      ) : (
        <div className={styles.endAnimation}>initial</div>
      )}
    </>
  );
};

export default Hello;
