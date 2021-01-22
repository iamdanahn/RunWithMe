
// BONUS SECTION
// createCheer(cheer)
// deleteCheer(cheerId)

export const createCheer = (cheer) => {
  return $.ajax({
    url: `/api/cheers`,
    method: `POST`,
    data: { cheer }
  })
}
export const deleteCheer = (cheerId) => {
  return $.ajax({
    url: `/api/cheers/${cheerId}`,
    method: `DELETE`
  })
}