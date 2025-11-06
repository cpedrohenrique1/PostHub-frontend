import PostComponentInterface from "./postComponent.interface";

export default interface FeedInfoInterface {
  feedItems: PostComponentInterface[],
  page: number,
  pageSize: number,
  totalPages: number,
  totalElements: number
}