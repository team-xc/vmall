import { Toast } from "vant";

const msg = {
  text(content) {
    Toast(content);
  },
  success(content) {
    Toast.success(content);
  },
  fail(content) {
    Toast.fail(content);
  }
};

export default msg;