using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PrefabScript : MonoBehaviour
{
    // Start is called before the first frame update

    float coreSpeed = 0.1f;
    public GameObject explosion1;

    void Start()
    {
        Destroy(this.gameObject, 5f);
    }

    // Update is called once per frame
    void Update()
    {
        transform.position += transform.TransformDirection(-Vector3.forward * coreSpeed);
    }

    private void OnCollisionEnter(Collision col)
    {
        if (col.gameObject.tag == "goal")
        {
            Instantiate(explosion1, gameObject.transform);
            gameObject.GetComponent<AudioSource>().PlayOneShot(gameObject.GetComponent<AudioSource>().clip);
        }
    }
}
