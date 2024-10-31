import React from 'react';

const ArtikelPilihan = () => {
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'How to create a marketing plan',
      href: '#',
      description:
        'Facilis ut est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 20, 2020',
      datetime: '2020-03-20',
      category: { title: 'Strategy', href: '#' },
      author: {
        name: 'Sarah Connor',
        role: 'Marketing Manager',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1517031774742-8c20c96aa06c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'Understanding SEO basics',
      href: '#',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      imageUrl:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3603&q=80',
      date: 'Apr 5, 2020',
      datetime: '2020-04-05',
      category: { title: 'SEO', href: '#' },
      author: {
        name: 'John Doe',
        role: 'SEO Specialist',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104228-7e0e2d3645f2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 5,
        title: 'How to create a marketing plan',
        href: '#',
        description:
          'Facilis ut est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        imageUrl:
          'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 20, 2020',
        datetime: '2020-03-20',
        category: { title: 'Strategy', href: '#' },
        author: {
          name: 'Sarah Connor',
          role: 'Marketing Manager',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1517031774742-8c20c96aa06c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 6,
        title: 'Understanding SEO basics',
        href: '#',
        description:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        imageUrl:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3603&q=80',
        date: 'Apr 5, 2020',
        datetime: '2020-04-05',
        category: { title: 'SEO', href: '#' },
        author: {
          name: 'John Doe',
          role: 'SEO Specialist',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104228-7e0e2d3645f2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
  ];

  return (
    <div className="py-8 bg-white sm:py-10"> {/* Mengurangi padding dari py-16 menjadi py-8 */}
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="grid max-w-2xl grid-cols-1 mx-auto mt-4 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="flex items-center mt-2 text-xs gap-x-4">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="relative group">
                <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
              </div>
              <div className="relative flex items-center mt-4 gap-x-4">
                <img src={post.author.imageUrl} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default ArtikelPilihan;
