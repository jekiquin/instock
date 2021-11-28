import { useLocation } from 'react-router';
import { pathToPageName } from '../../utils/utils';
import './LoadingMessage.scss';

export default function LoadingMessage() {
	const { pathname } = useLocation();
	const page = pathToPageName(pathname);
	return <h2 className="LoadingMessage">{`Loading ${page}...`}</h2>;
}
