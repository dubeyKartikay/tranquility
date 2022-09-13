
export default function FeaturedBlogWrapper() {
    let blog = fetch("https://raw.githubusercontent.com/dubeyKartikay/blog/master/Trending/Test.md")
  return (
    <div>{blog}</div>
  )
}
