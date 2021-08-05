import { Layout } from '@components/layout';
import db, { auth, provider } from '@utils/firebase';
import firebase from 'firebase';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const Index: NextPage = () => {
  const [user, setUser] = useState<firebase.User | undefined>();
  const [posts, setPosts] = useState([]);

  const loginHandler = () => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
      auth.signInWithRedirect(provider);
    });
  };

  const logoutHandler = () => {
    auth.signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(undefined);
        setPosts([]);
      }
    });
  }, []);

  useEffect(() => {
    db.collection('dzikr').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      );
    });
  }, []);

  const submitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      db.collection('posts').add({
        title: e.currentTarget.value,
        created_at: new Date(),
      });
    }
  };

  const notes = posts.map((post) => (
    <li key={post.id}>
      <h3>{post.data.title}</h3>
      <p>
        <b>{post.data.arabic}</b>
      </p>
      <p>
        <i>{post.data.arabic_latin}</i>
      </p>
      <p>
        {post.data.translated_id} [{post.data.narrator}]
      </p>
      <p>
        <b>Note:</b> {post.data.note}
      </p>
      <p>
        <b>Faedah:</b> {post.data.faedah}
      </p>
    </li>
  ));

  return (
    <Layout>
      <h1>Hi {user && user.displayName}</h1>

      {user ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <button onClick={loginHandler}>Login</button>
      )}

      <br />
      <br />
      <br />

      <input type="text" placeholder="New note" onKeyDown={submitHandler} />

      <ul>{notes}</ul>
    </Layout>
  );
};

export default Index;
