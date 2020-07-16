import SectionDivider from '@/components/SectionDivider'
import { FactSmall, FactWithIcon } from '@/components/Facts'
import { AboutMeText } from '@/components/Text'

import { getYearsFromDate } from '@/utils'

export default function About() {
  const birthdate = process.env.BIRTHDATE
  const companyName = process.env.COMPANY_NAME
  const companyPosition = process.env.COMPANY_POSITION
  const currentLocation = process.env.CURRENT_LOCATION
  const languageOne = process.env.FAVORITE_LANGUAGES_1
  const languageTwo = process.env.FAVORITE_LANGUAGES_2
  const firstName = process.env.NAME_FIRST
  const lastName = process.env.NAME_LAST
  const learnCurrent = process.env.LEARNING_CURRENTLY
  const learnWant = process.env.LEARNING_NEXT
  const travelNext = process.env.TRAVEL_DESTINATION_NEXT
  const travelPrevious = process.env.TRAVEL_DESTINATION_PREV
  const university = process.env.UNIVERSITY
  const workStartDate = process.env.WORK_STARTDATE

  const age = getYearsFromDate(birthdate)
  const companyText = `${companyPosition} for ${companyName}`
  const favoriteLanguages = `${languageOne} & ${languageTwo}`
  const visitNext = `Next place that I want to visit: ${travelNext}`
  const visitRecent = `Recently visited: ${travelPrevious}`
  const workYears = getYearsFromDate(workStartDate)

  return (
    <>
      <main>
        <SectionDivider />
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        // src="https://via.placeholder.com/800"
                        src="/media/profile-picture.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: '150px' }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <FactSmall
                        info={learnCurrent}
                        title="Currently Learning"
                      />
                      <FactSmall info={learnWant} title="Want to Learn" />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <FactSmall info={age} title="Age" />
                      <FactSmall
                        info={`${workYears}+ Years`}
                        title="Developing"
                      />
                      <FactSmall
                        info={favoriteLanguages}
                        title="Favorite Languages"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                    {`${firstName} ${lastName}`}
                  </h3>
                  <FactWithIcon
                    icon="map-marker-alt"
                    text={currentLocation}
                    isLocation={true}
                  />
                  <FactWithIcon icon="briefcase" text={companyText} />
                  <FactWithIcon icon="university" text={university} />
                  <FactWithIcon icon="plane" text={visitRecent} />
                  <FactWithIcon icon="globe" text={visitNext} />
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <AboutMeText />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
