import CenteredDiv from "../../components/Universal/CenteredDiv";
import Link from "../../components/Universal/Link";
import Text from "../../components/Universal/Text";
import TransparentCard from "../../components/Universal/TransparentCard/TransparentCard";
import { HeaderLarge } from "../../components/Universal/Header";

import { GITHUB_URL } from "../../config";

function AboutPage() {
	return (
		<>
			<CenteredDiv>
				<TransparentCard className="lastChildToBottom">
					<HeaderLarge>About</HeaderLarge>
					<Text>
						<Text className="high">Recommend Random 5 Games</Text>{" "}
						is a simple application for finding new games to play.
					</Text>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque sed purus non lectus ultricies pellentesque.
						Vivamus non aliquam turpis. Aenean ac ullamcorper
						turpis. Donec feugiat lectus sit amet mauris accumsan
						consectetur. Quisque eu turpis vulputate, fringilla
						nulla sit amet, sollicitudin turpis. Phasellus
						scelerisque elementum turpis, vel condimentum risus
						scelerisque sit amet. Praesent interdum, orci nec
						bibendum molestie, nunc odio ultrices dui, vitae
						interdum nisi elit eu mauris. Ut viverra fermentum sem,
						ut commodo magna blandit quis. In dictum interdum
						maximus. Vivamus justo enim, ornare eget iaculis in,
						varius vel eros. Nunc a aliquet augue, at accumsan
						velit.
					</Text>
					<Text>
						Donec eu blandit diam. Maecenas facilisis dolor id erat
						condimentum congue. Donec faucibus sagittis metus a
						pellentesque. Nulla commodo arcu in risus iaculis
						tincidunt. Etiam commodo purus eu erat vehicula rhoncus.
						Sed eget egestas diam. Etiam et nisl eu libero pretium
						fermentum. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Donec ac
						condimentum risus. Ut interdum sem nunc, sit amet mollis
						eros cursus id. Sed et maximus ligula. Integer consequat
						purus vel egestas egestas. Praesent tempor, ipsum sit
						amet ornare vestibulum, orci massa mollis velit, quis
						lacinia felis lorem vel est. Duis auctor eros sit amet
						sapien tempus, vel luctus sem laoreet.
					</Text>
					<Text>
						Learn more here:{" "}
						<Link to={GITHUB_URL} target="_blank">
							Github Repo
						</Link>
					</Text>
				</TransparentCard>
			</CenteredDiv>
		</>
	);
}

export default AboutPage;
