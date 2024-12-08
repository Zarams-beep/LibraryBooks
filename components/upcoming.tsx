import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { GiBlackBook } from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useState } from "react";

const Upcoming = () => {
  const [hidIt, setHidIt] = useState(false);
  const handleHid = () => {
    setHidIt((prev) => !prev);
  };

  // Set the initial state for the first event to true
  const [eventFirst, setEventFirst] = useState(true);
  const [eventSecond, setEventSecond] = useState(false);
  const [eventThird, setEventThird] = useState(false);

  const handleEvent1 = () => {
    setEventFirst(true);
    setEventSecond(false);
    setEventThird(false);
  };

  const handleEvent2 = () => {
    setEventFirst(false);
    setEventSecond(true);
    setEventThird(false);
  };

  const handleEvent3 = () => {
    setEventFirst(false);
    setEventSecond(false);
    setEventThird(true);
  };

  return (
    <>
      <Container className="containerEvents">
        <section className="welcomePart1">
          <Typography variant="h4">Upcoming Events </Typography>

          <div className="divLine">
            <p className="line lin"></p>
            <GiBlackBook className="icon" />
            <p className="line lin2"></p>
          </div>
        </section>

        <section className="sectionUpcoming">
          <button onClick={handleEvent1}>
            May 14, Donate a Book
          </button>
          <button onClick={handleEvent2}>May 27, Library Picnic</button>
          <button onClick={handleEvent3}>May 30, Cat Day</button>
        </section>

        {/* Section for Event 1 */}
        <section className={`event1 ${eventFirst ? 'seeVisible' : 'invisbile'}`}>
          <div className="side1">
            <Typography className="calendar">
              <MdOutlineCalendarMonth /> Saturday, MAY 14, 2024. 3:00 PM
            </Typography>
            <Typography variant="h4">
            Sharing Knowledge and Spreading Joy
            </Typography>
            <Typography>
            Donating books is a powerful way to share knowledge, inspire learning, and bring joy to others. Whether it&#39;s a beloved novel, a children&#39;s storybook, or an informative non-fiction title, every book donated has the potential to make a difference in someone&#39;s life. Donating books to libraries, schools, community centers, or charitable organizations helps ensure that valuable resources are accessible to those who need them most.{" "}
              <span className={`hidView ${hidIt ? "viewIt" : ""}`}>
              It promotes literacy, supports education, and nurtures a love for reading among people of all ages. Additionally, book donations can provide underfunded institutions with much-needed materials, enriching their collections and enabling them to better serve their communities. By donating a book, you are not only passing on a physical item but also sharing ideas, culture, and the endless possibilities that come with a good read.
              </span>
            </Typography>
            <Typography
              className="viewMore"
              onClick={handleHid}
              style={{ cursor: "pointer", color: "rgba(5, 5, 172, 0.856)" }}
            >
              {hidIt ? "VIEW LESS" : "VIEW MORE"}
            </Typography>
          </div>
          <div className="side2">
            <img
              src="/src/assets/sylvia-yang-_ar2ENzmqb0-unsplash.jpg"
              alt="Event 1"
            />
          </div>
        </section>

        {/* Section for Event 2 */}
        <section className={`event1 ${eventSecond ? 'seeVisible' : 'invisbile'}`}>
          <div className="side1">
            <Typography className="calendar">
              <MdOutlineCalendarMonth /> Saturday, MAY 27, 2024. 3:00 PM
            </Typography>
            <Typography variant="h4">
              A Creative Blend of Learning and Leisure
            </Typography>
            <Typography>
              The concept of a library picnic combines the tranquility of nature
              with the intellectual stimulation of a library. It’s an event
              where books, knowledge, and the outdoors meet, creating a unique
              and refreshing experience. Participants can bring their favorite
              books, enjoy reading under the open sky, and engage in discussions
              with fellow book lovers. {" "}
              <span className={`hidView ${hidIt ? "viewIt" : ""}`}>Library picnics often include storytelling
              sessions, book swaps, and even creative writing workshops, making
              them not just a casual outing but an enriching educational
              experience. Whether held in a park, a garden, or on the library
              grounds, a library picnic fosters a deeper connection to literature
              and nature, providing a serene environment for both relaxation and
              intellectual growth.</span>
            </Typography>
            <Typography
              className="viewMore"
              onClick={handleHid}
              style={{ cursor: "pointer", color: "rgba(5, 5, 172, 0.856)" }}
            >
              {hidIt ? "VIEW LESS" : "VIEW MORE"}
            </Typography>
          </div>

          <div className="side2">
            <img
              src="/src/assets/ben-white-4K2lIP0zc_k-unsplash.jpg"
              alt="Event 2"
            />
          </div>
        </section>

        {/* Section for Event 3 */}
        <section className={`event1 ${eventThird ? 'seeVisible' : 'invisbile'}`}>
          <div className="side1">
          <Typography className="calendar">
              <MdOutlineCalendarMonth /> Saturday, MAY 30, 2024. 3:00 PM
            </Typography>
            <Typography variant="h4">A Purr-fect Celebration</Typography>
            <Typography>
              Library Cat Day combines the love for feline friends with the joy
              of reading and community engagement. This special event invites
              cat enthusiasts to the library for a day filled with activities
              celebrating both cats and books. Libraries may host cat-themed
              storytimes, where children and adults can enjoy tales about cats,
              or offer special readings featuring famous literary cats. {" "}
              <span className={`hidView ${hidIt ? "viewIt" : ""}`}>In
              addition, some libraries partner with local animal shelters to
              facilitate cat adoptions or showcase cats available for adoption.
              Activities might include craft sessions to create cat toys or
              decorations, and educational talks about caring for cats. By
              blending the charm of cats with the enriching environment of a
              library, Cat Day fosters a sense of community and encourages a love
              for reading and animal welfare.</span>
            </Typography>
            <Typography
              className="viewMore"
              onClick={handleHid}
              style={{ cursor: "pointer", color: "rgba(5, 5, 172, 0.856)" }}
            >
              {hidIt ? "VIEW LESS" : "VIEW MORE"}
            </Typography>
          </div>
          <div className="side2">
            <img
              src="/src/assets/alvan-nee-ZCHj_2lJP00-unsplash.jpg"
              alt="Event 3"
            />
          </div>
        </section>
      </Container>

      <Container className="newContainer">
      <section className="welcomePart1">
          <Typography variant="h4">Latest News</Typography>

          <div className="divLine">
            <p className="line lin"></p>
            <GiBlackBook className="icon" />
            <p className="line lin2"></p>
          </div>
        </section>

        <section className="news">
            <div className="news1">
            <Typography className="calendar">
              <MdOutlineCalendarMonth />JULY 14, 2023
            </Typography>

            <Typography variant="h5">New Digital Library Initiative Launched in City</Typography>

            <Typography>
            The City Library has launched a new digital library initiative, providing free access to thousands of e-books, audiobooks, and online resources. This initiative aims to expand access to knowledge for all community members, especially those who cannot visit the library in person. The digital library is accessible 24/7 and includes resources in multiple languages, catering to the city’s diverse population.
            </Typography>
            </div>

            <div className="news1">
            <Typography className="calendar">
              <MdOutlineCalendarMonth />JULY 20, 2023
            </Typography>

            <Typography variant="h5">Local Library Hosts Summer Reading Program for Kids</Typography>

            <Typography>
            The Central Public Library kicked off its annual Summer Reading Program this week, encouraging children to develop a love for reading during their school break. The program includes weekly storytelling sessions, interactive book discussions, and rewards for young readers who complete reading challenges. The initiative aims to improve literacy rates and keep kids engaged in educational activities throughout the summer.</Typography>
            </div>

            <div className="news1">
            <Typography className="calendar">
              <MdOutlineCalendarMonth />JULY 24, 2023
            </Typography>

            <Typography variant="h5">Library Renovation Project to Include Eco-Friendly Upgrades</Typography>

            <Typography>
            The Westside Community Library announced plans for a major renovation project that will include several eco-friendly upgrades. The renovation will feature energy-efficient lighting, solar panels, and a new rainwater harvesting system. These improvements are part of the library&#39;s commitment to sustainability and will reduce its carbon footprint while creating a more comfortable environment for patrons.</Typography>
            </div>

            <div className="news1">
            <Typography className="calendar">
              <MdOutlineCalendarMonth />JULY 30, 2023
            </Typography>

            <Typography variant="h5">Mobile Library Service Expands to Rural Areas</Typography>

            <Typography>
            The County Library has expanded its mobile library service to reach more rural areas, ensuring access to books and educational resources for remote communities. The mobile library, equipped with a wide range of books, magazines, and digital resources, will visit various locations weekly. This initiative aims to promote literacy and education in underserved areas and bridge the gap in access to library services.
            </Typography>
            </div>
        </section>
      </Container>
    </>
  );
};

export default Upcoming;
