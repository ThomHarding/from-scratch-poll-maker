const SUPABASE_KEY = '';
const SUPABASE_URL = '';

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

export async function makePoll(question, option1, option2, votes1, votes2) {
    const response = await client
        .from('polls')
        .insert([
            {   
                question,
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

    if (!user) location.replace('../'); 
}

export async function getUser() {
    return client.auth.session();
}