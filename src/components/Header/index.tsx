import { MenuUnfoldOutlined } from '@ant-design/icons';

const MobileHeaderLogoWithCollapsedBtn = () => {

  return (
    <div className="mobile-logo-collapsed-box">
      <div className="mobile-header-logo-img">
        <div className="mask-theme-logo"></div>
      </div>
      <div className="mobile-switch-menu-btn" >
        <MenuUnfoldOutlined />
      </div>
    </div>
  );
};
export default MobileHeaderLogoWithCollapsedBtn;