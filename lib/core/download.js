import download from 'download-git-repo';

export const downloadFun = (url, project) => {
    download('direct:' + url, project, { clone: true }, function (err) {
        console.log(err ? 'Error' : 'Success');
    });
};
