export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  const idArr = [];
  for (const x of arr) {
    idArr.push(x.id);
  }
  return idArr;
}
