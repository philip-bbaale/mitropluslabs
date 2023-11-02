import Link from 'next/link'

export default function Footer() {
  const footerItems = [
    {
      title: 'Projects',
      links: ['Literacy Centers', 'Academy', 'Maketmania', 'Gorilla Hunt', 'Gorilla Lab']
    },
    {
      title: 'Company',
      links: ['Founders', 'The Team', 'Careers', 'Publications']
    },
    {
      title: 'Safety',
      links: ['Regulatory Aid', 'Charter']
    },
    {
      title: 'Privacy Policy',
      links: ['Terms & Conditions']
    }
  ]

  return (
    <footer className="bg-white text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">M</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 —
          <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {footerItems.map((item, index) => (
            <div key={index} className="p-5 w-full">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{item.title}</h2>
              <nav className="list-none mb-10">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#">
                      <a className="text-gray-600 hover:text-gray-800">{link}</a>
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </span>
      </div>
    </footer>
  )
}
