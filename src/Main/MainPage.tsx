import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Items } from '../data/items';
import { Item } from '../types/Item';
import LeftContainer from './components/LeftContianer';
import RightContainer from './components/RightContainer';

const InfoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;

`;

const Container = styled.div`
  max-width: 1400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const sortedItems = Items.sort((a,b) => a.name > b.name ? 1 : -1);



const MainPage = () => {
	const [width, setWidth] = useState<number | null>(null);
	const [selectedItem, setSelectedItem] = useState<Item>(sortedItems[0]);

	window.addEventListener('resize', () => setWidth(window.innerWidth));

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	if(width && width < 1400) {
		return (
			<InfoContainer>
				The width of the device is to small for this app.
			</InfoContainer>		
		);
	}
 	 
	return (
		<Container>
			<LeftContainer items={sortedItems} onItemSelected={item => setSelectedItem(item)}/>
			<RightContainer selectedItem={selectedItem}/>
		</Container>
	);
};
export default MainPage;