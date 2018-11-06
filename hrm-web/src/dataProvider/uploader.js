/**
 * Convert a `File` object returned by the upload input into
 * a base 64 string. That's easier to use on FakeRest, used on
 * the ng-admin example. But that's probably not the most optimized
 * way to do in a production database.
 */
const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */
const addUploadCapabilities = requestHandler => (type, resource, params) => {
    if (type === 'UPDATE') {
        console.log(params);
        if (params.data.Personal_Details.profile_pic && params.data.Personal_Details.profile_pic) {
            // only freshly dropped pictures are instance of File
            const formerPictures = params.data.Personal_Details.profile_pic.filter(p => !(p.rawFile instanceof File));
            const newPictures = params.data.Personal_Details.profile_pic.filter(p => p.rawFile instanceof File);

            return Promise.all(newPictures.map(convertFileToBase64))
                .then(base64Pictures => base64Pictures.map(picture64 => ({
                    src: picture64,
                    title: `${params.data.Personal_Details.f_name}`,
                    person_id:params.data.Personal_Details.id
                })))
                .then(transformedNewPictures => requestHandler(type, resource, {
                    ...params,
                    data: {
                        ...params.data,
                        pictures: [...transformedNewPictures, ...formerPictures],
                    },
                }));
        }
    }

    return requestHandler(type, resource, params);
};

export default addUploadCapabilities;