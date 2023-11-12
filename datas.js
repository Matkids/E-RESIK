const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra. Duis malesuada mattis tortor, ac ultrices elit euismod a.\n\nSuspendisse tincidunt eleifend volutpat. Phasellus vehicula sapien eu aliquam dignissim. Duis diam lorem, porta id nisi a, interdum rutrum quam. Suspendisse tincidunt euismod nunc. Etiam interdum, sem tincidunt sodales dignissim, orci ligula hendrerit dolor, ac suscipit neque eros sit amet magna. Sed gravida porttitor justo in venenatis. Maecenas dolor odio, semper eu velit pharetra, euismod placerat lectus. Curabitur nec aliquam mi. Aliquam suscipit iaculis vestibulum. Integer nibh ante, dignissim sed convallis eget, elementum ut nunc. Fusce non pharetra enim. Etiam ut justo est. Morbi commodo bibendum lorem a condimentum. Nulla ut magna tempor neque fringilla auctor. Ut aliquam ipsum urna, sodales ultricies ipsum pulvinar ac.\n\nNullam ultrices egestas dapibus. Vivamus sodales, nisl vel lobortis vestibulum, elit libero venenatis mauris, ut efficitur augue turpis ac lorem. Duis eu hendrerit ligula. Mauris auctor, purus ut ornare condimentum, ligula nisi egestas erat, eu fermentum libero massa tincidunt turpis. Suspendisse porta luctus elit eu pellentesque. Vivamus feugiat pellentesque hendrerit. Duis eu vulputate urna, quis bibendum nulla.\n\nPhasellus et faucibus elit, mollis accumsan arcu. Fusce scelerisque orci purus, vel scelerisque nisl viverra vitae. Nulla non lectus in lacus mollis consequat. Aenean consequat luctus tristique. Nunc imperdiet condimentum cursus. Praesent vel fermentum est, id pulvinar est. Nunc dolor velit, commodo non vehicula at, tincidunt lobortis mauris. Curabitur laoreet ipsum ut erat interdum ornare.";

const datas = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://cdn.cdnparenting.com/articles/2019/04/28140854/226657297-H-1024x700.jpg",
    content: content,
  },
  {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://img-aws.ehowcdn.com/750x428p/s3.amazonaws.com/photography.prod.demandstudios.com/ae739274-94ab-460c-a58f-15b4eca2bc4b.jpg?type=webp",
    content: content,
  },
  {
    id: 3,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://img-aws.ehowcdn.com/750x428p/s3.amazonaws.com/photography.prod.demandstudios.com/c40db2bd-caaa-42f6-82d8-aeb779e01d7a.jpg?type=webp",
    content: content,
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://img-aws.ehowcdn.com/750x428p/s3.amazonaws.com/photography.prod.demandstudios.com/62fb7cf7-c8b0-424e-aa55-715a61ee9edb.jpg?type=webp",
    content: content,
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://www.marthastewart.com/thmb/YLy4IW66Fsfb8l1D2nY00YKlNo8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/our-best-laundry-tips-lead-getty-0923-c18d4479e4e6454b905f3fda6c3c756b.jpg",
    content: content,
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://www.marthastewart.com/thmb/u9jD9XnOo84YeqlUyrBi5FQewwQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/our-best-laundry-tips-sort-colors-whites-getty-0923-19487a0ec97d4b67bf4810505285dba9.jpg",
    content: content,
  },
  {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://cdn.cdnparenting.com/articles/2019/04/28140854/226657297-H-1024x700.jpg",
    content: content,
  },
  {
    id: 8,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://img-aws.ehowcdn.com/750x428p/s3.amazonaws.com/photography.prod.demandstudios.com/f3e573c9-0f86-418f-984a-b151b70b6624.jpg?type=webp",
    content: content,
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://img-aws.ehowcdn.com/750x428p/s3.amazonaws.com/photography.prod.demandstudios.com/ae739274-94ab-460c-a58f-15b4eca2bc4b.jpg?type=webp",
    content: content,
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://img-aws.ehowcdn.com/750x428p/s3.amazonaws.com/photography.prod.demandstudios.com/c40db2bd-caaa-42f6-82d8-aeb779e01d7a.jpg?type=webp",
    content: content,
  },
  {
    id: 11,

    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://img-aws.ehowcdn.com/750x428p/s3.amazonaws.com/photography.prod.demandstudios.com/62fb7cf7-c8b0-424e-aa55-715a61ee9edb.jpg?type=webp",
    content: content,
  },
  {
    id: 12,

    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://www.marthastewart.com/thmb/u9jD9XnOo84YeqlUyrBi5FQewwQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/our-best-laundry-tips-sort-colors-whites-getty-0923-19487a0ec97d4b67bf4810505285dba9.jpg",
    content: content,
  },
  {
    id: 13,

    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
    "https://img-aws.ehowcdn.com/750x428p/s3.amazonaws.com/photography.prod.demandstudios.com/ae739274-94ab-460c-a58f-15b4eca2bc4b.jpg?type=webp",
    content: content,
  },
  {
    id: 14,

    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    content: content,
  },
  {
    id: 15,

    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    content: content,
  },
  {
    id: 16,

    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    content: content,
  },
  {
    id: 17,

    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    content: content,
  },
  {
    id: 18,

    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    content: content,
  },
  {
    id: 19,

    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    content: content,
  },
  {
    id: 20,

    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    content: content,
  },
];

export default datas;
