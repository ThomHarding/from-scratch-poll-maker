const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25pb3pteXV1aWpzY2ZkcXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5OTMzNTYsImV4cCI6MTk2MzU2OTM1Nn0.o5Vjx7n791rkZxuhmxHUoti3dkFusShLHfaXhGvGNHg';
const SUPABASE_URL = 'https://tfsniozmyuuijscfdqre.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUp(email, password) {
    const response = await client.auth.signUp({
        email: email,
        password: password,
    });
    return response.user;
}

export async function signIn(email, password) {
    const response = await client.auth.signIn({
        email: email,
        password: password,
    });
    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export async function getPolls() {
    const response = await client
        .from('polls')
        .select();

    return response.data;
}

export async function makePoll(title, option1, option2, votes1, votes2) {
    const response = await client
        .from('polls')
        .insert([
            {   
                title: title,
                option1: option1,
                option2: option2,
                votes1: votes1,
                votes2: votes2,
            },
        ]);

    return response.data;
}

export async function checkIfLoggedIn() {
    const user = await getUser();
    if (!user) window.location.href('../'); 
}

export function getUser() {
    const user = client.auth.session();
    return user;
}