import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDy3fyQ5YHyhsh2Gy-H7pcvHwpe7m8Esuc",
	authDomain: "crwn-clothing-b35f6.firebaseapp.com",
	databaseURL: "https://crwn-clothing-b35f6.firebaseio.com",
	projectId: "crwn-clothing-b35f6",
	storageBucket: "crwn-clothing-b35f6.appspot.com",
	messagingSenderId: "463864412165",
	appId: "1:463864412165:web:510952f4c93f4900c3846c",
	measurementId: "G-VT8KYETYRQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${ userAuth.uid }`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;