// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';
import HeaderLogo from '@/components/Header';



// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<GlobalStateInitialValue> {
  return { 
    name: '@umijs/max' ,
    layoutConfig: {
      collapsed: false,
    },
  };
}

export const layout: RunTimeLayoutConfig = (initialState) => {
  return {
    logo: HeaderLogo,
    layout: 'mix',
    title: '福晴医疗',
  };
};