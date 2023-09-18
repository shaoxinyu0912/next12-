import type { NextPage } from "next";
import { navs } from "./config";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "antd";
import { useState } from "react";
import Login from 'components/Login'
const Navbar: NextPage = () => {
  const {pathname}=useRouter();
  const [isShowLogin,setIsShowLogin]=useState(false);
  const handleGotoEditorPage=()=>{

  }
  const handleLogin=()=>{
    setIsShowLogin(true)
  }
  const handleClose=()=>{
    setIsShowLogin(false)

  }
  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>BLog-C</section>
      <section className={styles.linkArea}>
      {navs?.map((nav) => (
        <Link key={nav?.label} href={nav?.value} passHref >
          {/* {nav.label} */}
          <a className={pathname===nav?.value?styles.active:""}>{nav.label}</a>
        </Link>
      ))}
      </section>
     <section className={styles.operationArea}>
        <Button type='default' onClick={handleGotoEditorPage}>写文章</Button>
        <Button type='primary' onClick={handleLogin}>登陆</Button>

     </section>
     <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
