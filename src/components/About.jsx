export default function About({ isYellowTheme }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className={`text-3xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-2`}>About the Artist</h1>
      <p className={`text-lg font-semibold mb-8 ${isYellowTheme ? 'text-yellow-600' : 'text-gold-600'}`}>Master of Indian Miniature Painting</p>
      
      <div className="bg-white shadow p-6 md:p-8">
        <div className="prose prose-amber max-w-none">
          <div className={` p-6 border mb-8 ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <p className={`text-xl font-semibold italic mb-2 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>
              "Where There's a Will, There's a Way"
            </p>
            <p className="text-gray-700">
              Ajay Garg, born November 21, 1971 in Rajasthan, is a Deaf & Mute artist who 
              has overcome his physical inability and emerged as a specialist in Indian miniature painting.
            </p>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Early Life & Discovery</h2>
          <p className="text-gray-700 mb-6">
            At age 3, an injection for treating an injury caused Ajay to lose his ability to speak 
            and hear. He channeled his boundless energy into art, emerging from a shadow of 
            silence to speak through his paintings.
          </p>

          <p className="text-gray-700 mb-6">
            At age 5, his talent was recognized by Shri Sualal, an artist at the Royal Court of 
            Dholpur, Rajasthan. At age 14, he worked with Asha Devi, mastering miniature 
            paintings with exquisite details completed with a single-hair brush, magnifying 
            lens, and a steady hand — including painting on grains of rice and almonds.
          </p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Recognition</h2>
          <div className={` p-6 border mb-6 ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <p className="text-gray-700 italic mb-4">
              "Ajay has magic in his fingers."
            </p>
            <p className="text-sm text-gray-600">— Shri K.K. Hebbar, World-famous artist</p>
          </div>

          <div className={` p-6 border mb-6 ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <p className="text-gray-700 italic mb-4">
              "What the blind Surdas did for poetry, Ajay is doing with painting. Ajay has more than just beautiful paintings, he has a beautiful story."
            </p>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Community Work</h2>
          <p className="text-gray-700 mb-6">
            Ajay actively works within the deaf community and with non-profits Silent Smiles 
            (USA) and Every Person's Hope (Jaipur) to inspire children with disabilities.
          </p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Artistic Style</h2>
          <p className="text-gray-700 mb-6">
            Specializing in Gouache & Gold Powder on Paper, Ajay creates miniature paintings 
            that capture the rich heritage of Indian art. His meticulous attention to detail 
            and mastery of color have earned him recognition in the art world. Each piece is a 
            testament to hours of dedicated craftsmanship and a deep understanding of traditional 
            Indian artistic traditions.
          </p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Notable Works</h2>
          <div className={` p-6 border mb-6 ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <p className={`font-semibold mb-1 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Shiv Parivar Near Kailash Mansarover (2021)</p>
            <p className="text-gray-700">Gouache & Gold Powder on Paper • 10.5" x 7.5"</p>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Select Awards & Honors</h2>
          <div className={` p-6 border mb-6 ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>2004 — National Award by President Dr. A.P.J. Abdul Kalam</strong></li>
              <li>• <strong>Appreciation Letter from Hon. PM Shri Narendra Modi</strong></li>
              <li>• 2003 — Maharaja Agrasen Rastriya Award; State Award, Rajasthan</li>
              <li>• 2006 — Yuva Ratan; State Award (Miniature Painting)</li>
              <li>• 2006 — Forhex Award by Sri Sri Ravi Shankar Ji</li>
              <li>• <strong>2018 — National Merit Certificate (Handicraft) by Govt. of India</strong></li>
              <li>• 2019 — 1st National Excellence Award, Jhalawar</li>
              <li>• 2019 — India Star Passion Award; National Pride Award</li>
              <li>• 2021 — Rajasthan Gaurav Ratan; Jaipur Ratan Samman</li>
            </ul>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Solo Exhibitions (Select)</h2>
          <div className={` p-6 border mb-6 ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <ul className="space-y-2 text-gray-700">
              <li>• Jehangir Art Gallery, Mumbai — 1994, 1998, 2010, 2014, 2018, 2023</li>
              <li>• Bajaj Art Gallery, Mumbai — 1992, 1993, 1996, 2008, 2013</li>
              <li>• Davidson Art Gallery, Seattle USA — 2005, 2007, 2009, 2011</li>
              <li>• Augen Art Gallery, Portland USA — 1999, 2000, 2002, 2003, 2007, 2008, 2012, 2018, 2022</li>
              <li>• Open Eye Gallery, Edinburgh UK — 1996, 1997</li>
              <li>• Art Gallery Oaxaca, Mexico — 2015, 2016</li>
              <li>• Art Source Gallery, Boise USA — 1998, 2002</li>
              <li>• Academy of Fine Arts & Literature, Delhi — 2021-22</li>
            </ul>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>Collections</h2>
          <div className={` p-6 border mb-6 ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <ul className="space-y-2 text-gray-700">
              <li>• Bajaj Group</li>
              <li>• Tata Capital</li>
              <li>• SEBI</li>
              <li>• Camlin Ltd.</li>
              <li>• Ogilvy & Mather</li>
              <li>• Merril Lynch</li>
              <li>• SBC Warburg</li>
              <li>• Sh. K.K. Hebbar</li>
              <li>• Sir David Scholey, London</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
