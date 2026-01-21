const fileToGenerativePart = async (file: any) => {
    const base64Promise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result: string | ArrayBuffer | null = reader.result;
            if (typeof result === 'string') {
                resolve(result.split(',')[1]);
            } else {
                resolve(null);
            }
        };
        reader.readAsDataURL(file);
    });
    return {
        inlineData: { data: await base64Promise, mimeType: file.type },
    };
};

export default fileToGenerativePart;