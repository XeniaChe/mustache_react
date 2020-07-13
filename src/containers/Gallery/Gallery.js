import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import GalleryItem from '../../components/Gallery-item/GalleryItem';
import classes from './Gallery.module.scss';

const Gallery = (props) => {
	const [ stateGallery, setGallery ] = useState({
		persons: [
			{
				id: 1,
				image: 'mustache1.jpg',
				descr:
					'Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. At elementum eu facilisis sed odio morbi quis. Euismod elementum nisi quis eleifend quam adipiscing vitae'
			},
			{
				id: 2,
				image: 'mustache2.jpg',
				descr:
					'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce accumsan venenatis risus, a tempus velit fringilla elementum. In fermentum lacinia mi, ut hendrerit est egestas in. Aenean pellentesque augue euismod, finibus erat nec, tempor est. Ut consectetur ligula at neque varius, ut condimentum elit tempus. Quisque efficitur sem ac elementum pharetra. Maecenas semper luctus eleifend. Vivamus augue magna, suscipit ut pretium vitae, semper eget enim. '
			},
			{
				id: 3,
				image: 'mustache3.jpg',
				descr:
					'Quisque porta neque nibh. Sed elit neque, sagittis a ipsum aliquet, varius imperdiet quam. Aenean ut varius urna. Sed posuere augue eu nunc consectetur, id laoreet turpis lacinia. Sed non elementum orci. Vestibulum tempor, risus ut hendrerit tincidunt, eros augue feugiat urna, in congue mauris sem sit amet est. Nulla facilisi.'
			},
			{
				id: 4,
				image: 'mustache4.jpg',
				descr:
					'Morbi metus libero, ullamcorper at luctus eu, finibus quis risus. Nullam id lorem non ipsum vulputate facilisis eget eget mauris. In venenatis quam non lorem rhoncus, ac ultrices sem hendrerit. Proin mauris turpis, facilisis in velit in, sodales aliquet nibh. Ut nisl sem, tristique id laoreet et, varius non lectus. Ut sit amet lacinia turpis, ut commodo dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, augue et fermentum euismod, urna mauris bibendum mauris, in vestibulum magna ipsum in tortor.'
			},
			{
				id: 5,
				image: 'mustache5.jpg',
				descr:
					'Cras porta eros sit amet urna interdum commodo. Etiam libero ante, congue blandit aliquet dapibus, faucibus non leo. Aliquam dignissim quam mauris, in suscipit odio vehicula non. Quisque convallis augue ac tellus efficitur sollicitudin. Vivamus a sagittis metus. Aliquam viverra lorem velit. Cras interdum odio nec consequat eleifend. Quisque lobortis ac erat ut fermentum.'
			},
			{
				id: 6,
				image: 'mustache6.jpg',
				descr:
					'Nullam id lorem non ipsum vulputate facilisis eget eget mauris. In venenatis quam non lorem rhoncus, ac ultrices sem hendrerit. Proin mauris turpis, facilisis in velit in, sodales aliquet nibh. Ut nisl sem, tristique id laoreet et, varius non lectus. Ut sit amet lacinia turpis, ut commodo dolor. '
			},
			{
				id: 7,
				image: 'mustache7.jpg',
				descr:
					'Fusce accumsan venenatis risus, a tempus velit fringilla elementum. In fermentum lacinia mi, ut hendrerit est egestas in. Aenean pellentesque augue euismod, finibus erat nec, tempor est. Ut consectetur ligula at neque varius, ut condimentum elit tempus. Quisque efficitur sem ac elementum pharetra. Maecenas semper luctus eleifend. Vivamus augue magna, suscipit ut pretium vitae, semper eget enim. '
			},
			{
				id: 8,
				image: 'mustache8.jpg',
				descr:
					'Mauris ac commodo eros. Mauris lectus mi, venenatis a urna eu, pellentesque placerat quam. Morbi metus libero, ullamcorper at luctus eu, finibus quis risus. Nullam id lorem non ipsum vulputate facilisis eget eget mauris. In venenatis quam non lorem rhoncus, ac ultrices sem hendrerit. Proin mauris turpis, facilisis in velit in, sodales aliquet nibh. Ut nisl sem, tristique id laoreet et, varius non lectus. Ut sit amet lacinia turpis, ut commodo dolor.'
			},
			{
				id: 9,
				image: 'mustache9.jpg',
				descr:
					'Curabitur eleifend nisl sapien, vitae egestas massa ornare et. Sed id volutpat lorem, quis efficitur lacus. Mauris consectetur at purus maximus semper. Suspendisse ac nisi id nulla sodales aliquam. Nullam interdum eleifend ante, a scelerisque ante molestie aliquet. Praesent volutpat augue et interdum consequat. '
			}
		]
	});

	// const [ stateId, setId ] = useState({
	// 	targetId: null
	// });

	// const getIdHandler = () => {
	// 	let postId = id;
	// 	setId({
	// 		targetId: postId
	// 	});
	// };

	//RENDERING LIST
	let persons = stateGallery.persons.map((el, elIndex) => {
		return (
			<Link
				to={{ pathname: '/gallery/' + el.id, state: stateGallery }}
				// onClick={() => getIdHandler(el.id)}
				key={el.id}
				match={props.match}
			>
				<GalleryItem photo={el.image} alt={elIndex} />
			</Link>
		);
	});

	return (
		<Fragment>
			<div className={classes.gallery}>{persons}</div>
		</Fragment>
	);
};
export default Gallery;
