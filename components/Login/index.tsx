interface IProps {
  isShow: boolean;
  onClose: () => void;
}
import { ChangeEvent, useState } from "react";
import styles from "./index.module.scss";
import CountDown from "components/CountDown";

const Login = (props: IProps) => {
  const { isShow = false } = props;
  const [form, setForm] = useState({
    phone: "",
    verify: "",
  });
  const [isShowVerifyCode,setIsShowVerifyCode]=useState(false);
  console.log(setForm);
  const handleClose = () => {};
  const handleGetVerifyCode = () => {
    setIsShowVerifyCode(true)
  };
  const handleLogin = () => {};
  const handleOAuthGithub = () => {};
  const handleFormChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleCountDownEnd=()=>{
    setIsShowVerifyCode(false)
  }
  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>手机号登陆</div>
          <div className={styles.close} onClick={handleClose}>
            x
          </div>
        </div>
        <input
          name="phone"
          type="text"
          placeholder="请输入手机号"
          value={form.phone}
          onChange={handleFormChange}
        />
        <div className={styles.verifyCodeArea}>
          <input
            name="verify"
            type="text"
            placeholder="请输入验证码"
            value={form.verify}
            onChange={handleFormChange}
          />
          <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
           
            {isShowVerifyCode?<CountDown time={10}onEnd={handleCountDownEnd} />:'获取验证码'}
          </span>
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>
          登陆
        </div>
        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          使用github登陆
        </div>
        <div className={styles.loginPrivacy}>
          注册登陆即表示同意
          <a href="https://moco.imooc.com/privacy.html" target="_blank">
            隐私政策
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
