

// const authority = '8b3fabe8e4b148d';
/**
 * 判断菜单路由权限
 * @param {} params 
 */
export function hasAuthority(authority = "8bc0dd9199bc481") {
  const userInfo = sessionStorage.getItem("userInfo");
  if (userInfo) {
    const roleList = JSON.parse(userInfo).roleList;
    const hasRoleId = roleList.find(
      (value) => value.roleId === authority
    );
    return hasRoleId
  }
  return false

}

