import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const AdminPanel = () => {
  return (
    <main className='relative   md:mx-auto md:min-h-screen md:max-w-screen-xl '>
      <div className=' sticky top-0 flex  max-h-fit max-w-max items-center  justify-center px-3 '>
        <AiOutlineMenu size={25} />
      </div>
      <div className='flex   gap-10'>
        <nav className='flex max-h-screen min-h-full max-w-[100px]     flex-col   items-center justify-between border-2   border-white bg-gray-200 py-5 px-3 shadow-md'>
          <div className='flex w-full flex-col justify-between  gap-5 bg-gray-800'>
            <div>
              <ul>
                <li>
                  <Link to=''>
                    <MdOutlineFavoriteBorder size={25} />
                  </Link>
                </li>
                <li>
                  <Link to=''>
                    <MdOutlineFavoriteBorder size={25} />
                  </Link>
                </li>
                <li>
                  <Link to=''>
                    <MdOutlineFavoriteBorder size={25} />
                  </Link>
                </li>
                <li>
                  <Link to=''>
                    <MdOutlineFavoriteBorder size={25} />
                  </Link>
                </li>
                <li>
                  <Link to=''>
                    <MdOutlineFavoriteBorder size={25} />
                  </Link>
                </li>
                <li>
                  <Link to=''>
                    <MdOutlineFavoriteBorder size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <ul className='flex w-full flex-col items-center gap-2 bg-blue-500 '>
            <li>
              <Link to=''>
                <MdOutlineFavoriteBorder size={25} />
              </Link>
            </li>
            <li>
              <Link to=''>
                <RxAvatar size={25} />
              </Link>
            </li>
            <li>
              <Link to=''>
                <RxAvatar size={25} />
              </Link>
            </li>
            <li>
              <Link to=''>
                <RxAvatar size={25} />
              </Link>
            </li>
            <li>
              <Link to=''>
                <RxAvatar size={25} />
              </Link>
            </li>
          </ul>
        </nav>
        <section className='max-w-4xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia cum officia,
          dolores atque quam nisi eveniet, earum veniam natus aspernatur perferendis explicabo, odit
          voluptatibus nostrum beatae ea corrupti modi. Cumque repellat ducimus neque laboriosam
          ipsa, consequatur vitae aspernatur culpa, quasi debitis ipsam harum cum nostrum quidem!
          Quod, voluptatibus fugit quasi quisquam, sunt aspernatur quibusdam laboriosam deleniti
          saepe sed maxime! Porro dignissimos, esse libero cum pariatur doloremque excepturi
          incidunt neque eos nostrum, inventore, in enim soluta a. Dolores libero tempore quibusdam,
          consectetur suscipit repellat, nam ut ad deleniti, similique quidem. Laborum consectetur
          culpa dolorum ratione odit excepturi quia magni. Ipsam, cupiditate, magni ipsa amet
          tempora inventore quae minima in laboriosam illum cum modi architecto eligendi quaerat
          voluptate consequatur quos possimus! Numquam eveniet facere magnam culpa in id
          necessitatibus eaque voluptatibus cum similique ad sequi, labore iure distinctio
          voluptatem quas suscipit enim ducimus! Provident perferendis harum quod ratione,
          repellendus perspiciatis tempore! Odio earum deleniti dicta officia modi molestiae
          aliquam, sed, voluptatibus culpa fugiat accusamus quo laborum nisi voluptates temporibus
          perferendis, provident molestias minus quidem amet quod? Ad dolorem nam eligendi quos!
          Inventore quidem quia architecto dolore aspernatur praesentium fugiat a velit eveniet
          nesciunt asperiores, repellendus temporibus tempora? Saepe necessitatibus numquam qui,
          doloremque officiis quas mollitia quod officia, aliquam, laudantium nesciunt corporis.
          Dolores tenetur consectetur ipsam adipisci blanditiis veniam quis quibusdam cupiditate
          temporibus, vitae inventore, minima quaerat! Doloribus magni perspiciatis nesciunt quam
          alias, sunt repudiandae nam dolor natus possimus suscipit corporis voluptatibus. Est,
          maiores in. Autem voluptatibus obcaecati magnam quae, architecto maxime assumenda
          explicabo praesentium quod ea reprehenderit vel molestiae beatae alias expedita odio sit
          maiores hic aspernatur tenetur qui. Illum, natus. Voluptates odio sed veniam similique,
          illum perferendis non tempora. Molestias unde quia dolor nostrum itaque, doloribus,
          deleniti repellat in officiis non dolore sint eum saepe deserunt nam! Ratione, asperiores
          iusto.
        </section>
        <section className='w-[800px] max-w-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio beatae id impedit aliquid
          dignissimos doloremque asperiores vitae, similique commodi cum reiciendis eius cumque nam.
          Sint, blanditiis. Dolore distinctio modi maiores? Ipsum officia distinctio repudiandae
          facere vitae, voluptatum, qui aspernatur nobis a commodi magni similique dicta, sit
          inventore blanditiis repellat! Eveniet, officia cupiditate! Quia enim reprehenderit quos
          earum amet velit quam! Porro corporis commodi laborum voluptatum blanditiis vel natus
          exercitationem illo placeat veniam quis, dolorem corrupti deserunt. Saepe consequatur
          dolores, alias nesciunt nisi perspiciatis aliquam, rerum provident ad quod enim
          necessitatibus. Quos qui totam architecto adipisci beatae? Praesentium officiis unde illum
          quae vel itaque perferendis similique autem iusto sed, corrupti optio repellat laboriosam
          error deleniti quis doloribus, molestiae nihil quasi. Doloribus! Repellat voluptate
          possimus quibusdam, maiores itaque magnam. Et beatae sunt aliquid dolore labore, eius
          possimus voluptas dicta fugiat error consequatur vitae porro ducimus minima dolor.
          Excepturi corporis non cum doloremque!
        </section>
      </div>
    </main>
  )
}

export default AdminPanel
