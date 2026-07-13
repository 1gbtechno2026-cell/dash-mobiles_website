import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import shashwatAgarwalPhoto from '../assets/leadership/shashwat-agarwal.jpg'
import yGurujiPhoto from '../assets/leadership/y-guruji.jpg'
import nabinKhetanPhoto from '../assets/leadership/nabin-khetan.jpg'
import hemanthMandaPhoto from '../assets/leadership/hemanth-manda.jpg'
import rishiGuptaPhoto from '../assets/leadership/rishi-gupta.jpg'
import './Leadership.css'

const leaders = [
  {
    name: 'Y Guru',
    role: 'Founder & CMD, Celkon Group',
    photo: yGurujiPhoto,
    bio: 'Mr. Y Guruswamy Naidu, Founder and CMD of Celkon Group, boasts over three decades of groundbreaking experience in the mobile industry. A pioneer in retail, distribution, and manufacturing, he embodies the philosophy "Here to Where," emphasizing success as an ongoing journey. From humble beginnings, Mr. Guru has revolutionized mobile and electronics manufacturing, seamlessly blending technology and human sensibilities. Under his leadership, Celkon Group thrives on passion and innovation, shaping the future of the industry. His journey stands as a beacon in the fast-paced tech world, showcasing the impact of visionary leadership.',
  },
  {
    name: 'Shashwat Agarwal',
    role: 'Founder & CEO, Dashmobiles Private Limited',
    photo: shashwatAgarwalPhoto,
    bio: 'As the CEO of Dashmobiles, Shashwat is the architect of our mission to build a powerful, future-ready B2B electronics distribution ecosystem connecting technology products with markets across India. With a focus on sustainable growth and cutting-edge performance, he drives our strategic initiatives and ensures our team remains at the forefront of the industry. His leadership continues to shape Dashmobiles into a brand synonymous with quality, reliability and forward-thinking innovation.',
  },
  {
    name: 'Nabin Khetan',
    role: 'CFO, Dashmobiles Private Limited',
    photo: nabinKhetanPhoto,
    bio: 'Nabin Khetan leads the financial operations at Dashmobiles with a focus on precision and scalable growth. By aligning our financial objectives with our core business goals, Nabin has streamlined our processes and ensured that our resources are utilized to deliver maximum value to our clients. His analytical approach and strategic foresight are vital to our mission, ensuring that Dashmobiles remains agile and resilient in an ever-evolving market.',
  },
  {
    name: 'Hemanth Manda',
    role: 'Director, Unicorn Distribution Pvt. Ltd.',
    photo: hemanthMandaPhoto,
    bio: 'Hemanth is a business professional with more than 10 years of experience in electronic exports from India, with strong relationships across Dubai, Hong Kong, Miami and Europe. His skills span business planning, new business development and operations.',
  },
  {
    name: 'Rishi Gupta',
    role: 'CXO, Dashmobiles Private Limited',
    photo: rishiGuptaPhoto,
    bio: 'As the CXO at Dashmobiles, Rishi is the driving force behind our commitment to excellence. He bridges the gap between complex technology and intuitive user experience, ensuring that every touchpoint with our brand is seamless, meaningful and impactful. By championing a user-first philosophy, Rishi leads our efforts to not only meet customer expectations but to anticipate their needs, positioning Dashmobiles as a leader in creating exceptional digital experiences.',
  },
]

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function LeaderCard({ name, role, photo, bio, delay = 0 }) {
  const photoEl = photo ? (
    <img className="leader-photo" src={photo} alt={name} />
  ) : (
    <span className="leader-initials">{initials(name)}</span>
  )

  if (bio) {
    return (
      <Reveal as="div" className="leader-card leader-card--bio" delay={delay}>
        {photoEl}
        <div className="leader-card-body">
          <h3>{name}</h3>
          <p>{role}</p>
          <p className="leader-bio">{bio}</p>
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal as="div" className="leader-card" delay={delay}>
      {photoEl}
      <h3>{name}</h3>
      <p>{role}</p>
    </Reveal>
  )
}

function Leadership() {
  usePageTitle('Leadership')

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Visionary Leadership. Experienced Direction. Shared Ambition."
        text="Our leadership brings together business experience, market understanding, entrepreneurial thinking and a shared commitment to building sustainable and scalable enterprises."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Leadership</span>
            <h2>Meet Our Leadership Team</h2>
            <p>
              Together, our leadership is focused on building a modern, agile and scalable B2B
              electronics distribution enterprise with strong relationships across the Indian market.
            </p>
          </Reveal>
          <div className="leader-grid">
            {leaders.map((leader, index) => (
              <LeaderCard key={leader.name} {...leader} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Why Partner With Dashmobiles?"
        text="Proven business scale, a strong distribution network and experienced leadership focused on scale, execution and long-term business development."
        secondary={{ to: '/vision-mission', label: 'Our Vision & Values' }}
      />
    </>
  )
}

export default Leadership
