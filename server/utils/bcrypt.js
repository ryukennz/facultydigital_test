import bcryptjs from 'bcryptjs';

export const hashPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
}

export const comparePassword = (password, hashedPassword) => {
    return bcryptjs.compare(password, hashedPassword);
}