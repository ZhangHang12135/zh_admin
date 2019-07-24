// 工具方法

/**
 * @description 对callback执行times次数
 * @param {number} tiems
 * @param {function} callback
 */
export const doCustomTimes = (tiems, callback) => {
  let i = -1
  while (++i < tiems) {
    callback(i)
  }
}
/**
 * @description 比较两个对象是否相等，这里只是比较简单的对象
 * @param {Object} obj1
 * @param {Object} obj2
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) return false
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true
  else return !keysArr1.some(key => obj1[key] !== obj2[key])
}
