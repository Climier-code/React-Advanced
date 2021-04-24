import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus ex quis est aliquet, eget consectetur mi ultricies. Integer cursus accumsan rutrum. In vehicula et magna nec tempor. Vivamus consectetur augue ac efficitur varius. Aliquam ac feugiat enim. Integer diam turpis, feugiat sit amet felis vitae, pharetra pellentesque leo. Vivamus at metus enim. Etiam commodo tortor quis risus lacinia, non vehicula sapien mollis. Etiam efficitur fermentum euismod. Nullam et mattis augue. Integer et elit a dui gravida feugiat. Nunc viverra laoreet quam, scelerisque pulvinar sem laoreet in. Quisque imperdiet justo non magna semper, ac pretium ex ultricies. Phasellus ut magna quam.',
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
