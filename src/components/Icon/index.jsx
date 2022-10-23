import EIcon from "../../consts";

export default function Icon(props) {

  const {
    type,
    width = 22,
    height = 22,
    fill = 'gray',
    bgColor = 'none',
  } = props;

  if (type === EIcon.cart) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92">
        <path fill={fill} d="M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4a5.9 5.9 0 0 1-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9a4 4 0 0 1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88a4 4 0 0 1 3.2 1.7c.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9a6.6 6.6 0 0 0-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9a6.6 6.6 0 0 0 1.9-4.6c0-1.7-.7-3.4-1.9-4.6a6.6 6.6 0 0 0-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6a6.6 6.6 0 0 0 4.6 1.9c1.7 0 3.4-.7 4.6-1.9a6.6 6.6 0 0 0 1.9-4.6c0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z"/>
      </svg>
  } else if (type === EIcon.logo) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path fill={fill} d="m11.2 20.2 3.2 2.4c.4.4 0 1 0 1l.6.3 1.5-2c.5-.7 1-1.8 1-2.6 0-2.6-3.4-3.8-5-5.2-.7-.7-.1-1.1-.1-1.1l-.6-.4c-2 2.3-4.1 5-.6 7.6zm1.7-8.6c2 1.7 5.5 3.6 5.7 4.7.3 1.5-.4 2.4-.4 2.4l.4.3.7-.9 2.6-3.7c2-2.8 1.2-5.5-1.8-7.6-1.5-1.1-3-2.3-4.6-3.3-.8-.8-.2-2.2-.2-2.2l-.4-.3s-3.3 4-3.6 5.6c-.3 1.5-.3 3.3 1.6 5zM23 27l-.7-2H7.7L7 27h4.2l.6 2h6.4l.6-2z"/>
      </svg>
  } else if (type === EIcon.avatar) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill={bgColor} d="M0 0h24v24H0z"/>
        <path fill={fill} d="M9 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 0 1-8-9l5-5a10 10 0 0 0 11 4 8 8 0 0 1-8 10z"/>
      </svg>
  } else if (type === EIcon.plus) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
        <path fill={fill} d="M41 19H27V4a4 4 0 1 0-8 0v15H4a4 4 0 0 0 0 8h15v14a4 4 0 0 0 4 4c2 0 4-1 4-4V27h14a4 4 0 0 0 0-8z"/>
      </svg>
  } else if (type === EIcon.favorite) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
        <path fill={fill} d="M327 10c-39 0-75 18-99 47A128 128 0 0 0 0 139c0 55 33 119 98 190 50 55 105 97 120 109l9 7 10-7c15-12 70-54 120-109 65-71 98-135 98-190 0-71-58-129-128-129zm8 299c-42 45-86 81-108 98-21-17-65-53-107-98-59-64-90-123-90-170a98 98 0 0 1 184-48l14 24 13-24a98 98 0 0 1 184 48c0 47-31 106-90 170z"/>
      </svg>
  } else if (type === EIcon.done) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill={fill} d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm-.5 17L6 12.8l1.8-2.4 3.3 2.6 4.6-5 2.2 2Z" data-name="done circle"/>
      </svg>
  } else if (type === EIcon.search) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 184">
        <path fill={fill} d="M55 9a67 67 0 0 0-25 92 68 68 0 0 0 81 30l30 53 22-13-31-52a67 67 0 0 0 15-85A68 68 0 0 0 55 9zm70 37a42 42 0 0 1-15 58 42 42 0 1 1 15-58z"/>
      </svg>
  } else if (type === EIcon.cross) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.9 94.9">
      <path fill={fill} d="M56 47.5 94.2 9c.8-.8.8-2.2 0-3L88.8.6a2.1 2.1 0 0 0-3 0L47.5 39 9 .6c-.8-.8-2.2-.8-3 0L.6 6.1c-.8.8-.8 2.2 0 3L39 47.5.6 85.8c-.8.9-.8 2.2 0 3l5.5 5.5a2.1 2.1 0 0 0 3 0L47.5 56l38.3 38.4a2.1 2.1 0 0 0 3 0l5.5-5.5c.8-.8.8-2.1 0-3L56 47.5z"/>
    </svg>
  } else if (type === EIcon.arrowRight) {
    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={fill} d="m21.9 12-7.5 6.2.6.8 9-7.5L15 4l-.6.8 7.5 6.2H0v1h21.9z"/>
    </svg>
  }
}