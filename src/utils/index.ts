/**
 * 驼峰转换成横杠连接
 */
export function toLine(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
